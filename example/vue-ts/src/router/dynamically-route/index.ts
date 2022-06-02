import type { RouteRecordRaw, Router } from 'vue-router';

type RouterModulesData = Record<string, RouteRecordRaw | RouteRecordRaw[]>;

type RouterModule = Router | (() => Router);

/**
 * 动态路由
 * 自动加载 modules 下的路由文件
 *
 * 注：该文件位置不能随意移动
 */
function dynamicallyRoute(_router: RouterModule) {
  const modulesRouteFile = import.meta.globEager<RouterModulesData>(
    '../../modules/*/router.ts',
  );
  const modulesRouteFolder = import.meta.globEager<RouterModulesData>(
    '../../modules/*/router/index.ts',
  );

  const router = typeof _router === 'function' ? _router() : _router;

  const modules = {
    ...modulesRouteFile,
    ...modulesRouteFolder,
  };

  const addRoute = (route: RouteRecordRaw) => {
    if (route?.name) {
      if (import.meta?.hot && router.hasRoute(route.name)) {
        console.warn('[dynamically-route warn]: 重复路由', route);
      }
      router.addRoute(route);
    } else if (import.meta?.hot) {
      console.warn('[dynamically-route warn]: 模块路由文件必须设置 route name', route);
    }
  };

  for (const routesModules of Object.values(modules)) {
    const _routes = routesModules.default || routesModules;
    if (Array.isArray(_routes)) {
      _routes.forEach(addRoute);
    } else {
      addRoute(_routes as RouteRecordRaw);
    }
  }

  if (import.meta?.hot) {
    dynamicallyRoute(router);
  }

  return router;
}

export default dynamicallyRoute;
