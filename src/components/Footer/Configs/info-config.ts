interface IInfoConfig {
  path: string;
  name: string;
}

export const INFO_CONFIG = [
  {
    path: '/',
    name: 'layout.footer.info.terms'
  },
  {
    path: '/',
    name: 'layout.footer.info.policy'
  },
  {
    path: '/',
    name: 'layout.footer.info.agreement'
  }
] as IInfoConfig[];
