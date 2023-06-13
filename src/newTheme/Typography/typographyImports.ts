import CaustenBold from '../Causten-Black.otf'
import CaustenLight from '../Causten-Light.otf'
import CaustenMedium from '../Causten-Medium.otf'
import CaustenRegular from '../Causten-Regular.otf'
import CaustenSemiBold from '../Causten-SemiBold.otf'

const typographyImports = `
@font-face {
  font-family: 'Causten';
  font-style: normal;
  font-display: swap;
  font-weight: 200;
  src: local('Causten'), local('Causten-Light'), url(${CaustenLight}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
@font-face {
  font-family: 'Causten';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local('Causten'), local('Causten-Regular'), url(${CaustenRegular}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
@font-face {
  font-family: 'Causten';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local('Causten'), local('Causten-Medium'), url(${CaustenMedium}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
@font-face {
  font-family: 'Causten';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local('Causten'), local('Causten-Semi-Bold'), url(${CaustenSemiBold}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
@font-face {
  font-family: 'Causten';
  font-style: normal;
  font-display: swap;
  font-weight: 800;
  src: local('Causten'), local('Causten-Bold'), url(${CaustenBold}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
`;
export default typographyImports;
