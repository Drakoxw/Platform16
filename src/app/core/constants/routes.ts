import { RoutesClient } from "@interfaces/models"

export const MODULES = {
    CLIENT: '',
    USER: 'user'
}

export const PATHS_MODULE_CLIENT: RoutesClient = {
    root: '',
    items: 'items',
}

export const PATHS_FULL_CLIENT: RoutesClient = {
    root: '',
    items: `${MODULES.USER}/${PATHS_MODULE_CLIENT.items}`,
}
