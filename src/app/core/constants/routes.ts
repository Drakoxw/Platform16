import { RoutesClient } from '@interfaces/models';

export const MODULES = {
  CLIENT: '',
  USER: 'user',
};

// RUTAS DEL CLIENTE EN MODULO
export const PATHS_MODULE_CLIENT: RoutesClient = {
  root: '',
  aboutUs: 'quienessomos',
  contactUs: 'contactanos',
};

// RUTAS COMPLETAS PARA EL ROUTE LINK
export const PATHS_FULL_CLIENT: RoutesClient = {
  root: '',
  aboutUs: `${MODULES.CLIENT}/${PATHS_MODULE_CLIENT.aboutUs}`,
  contactUs: `${MODULES.CLIENT}/${PATHS_MODULE_CLIENT.contactUs}`,
};
