import { APP_MENUS, APP_ROUTES } from "../constants";

export const getActiveRoute = (location) => {
    if (location?.pathname === '/') {
        return APP_ROUTES.HOMEPAGE;
    }
    return APP_MENUS.find(route => route.path && location?.pathname.includes(route.path));
}

export const getBreadcrumbs = (location, params) => {
    if (location?.pathname === '/') {
        return [{ text: APP_ROUTES.HOMEPAGE.text, url: '', active: true }];
    }
    const allRoutes = Object.keys(APP_ROUTES).map((key) => APP_ROUTES[key]);
    const activeParams = params ? Object.keys(params).filter(key => key !== '*').map((key) => params[key]) : '';
    let breadcumbs = allRoutes.filter(route => route.path && location?.pathname.includes(route.path)).map(route => ({
        text: route.text,
        url: route.url,
        active: activeParams.length ? false : true
    }))
    if (activeParams.length) {
        breadcumbs = [...breadcumbs, ...activeParams.map(param => ({
            text: `#${param}`,
            url: '',
            active: true
        }))]
    }
    return breadcumbs
}