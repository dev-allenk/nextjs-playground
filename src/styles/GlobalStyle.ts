import { createGlobalStyle } from 'styled-components'

const DEFAULT_FONT_SIZE = 10
const MOBILE_DESIGN_WIDTH = 375
const MOBILE_MIN_WIDTH = 320
const MOBILE_MAX_WIDTH = 440

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    -webkit-font-smoothing: antialiased;
  }

  /* 폰트 사이즈 */
  html {
    /* screen width 441px 이상은 더 커지지 않도록 고정 (11.73px) */
    @media only screen and (min-width: 441px) and (max-width: 800px) {
      font-size: ${DEFAULT_FONT_SIZE * (MOBILE_MAX_WIDTH / MOBILE_DESIGN_WIDTH)}px;
    }

    /* 321 ~ 440 screen width에서 375디자인 비율을 유지하도록 root font-size를 vw로 조정 */
    /* 375보다 작은 화면에서 삐져나옴 방지, 375보다 큰 화면에서 양 옆 비어보임 방지 */
    /* 440은 iPhone 12 pro max width 428px 보다 크게 잡음 */
    @media only screen and (min-width: 321px) and (max-width: 440px) {
      font-size: ${(DEFAULT_FONT_SIZE / MOBILE_DESIGN_WIDTH) * 100}vw;
    }

    /* screen width 320px 이하는 더 작아지지 않도록 고정 */
    @media only screen and (max-width: 320px) {
      font-size: ${DEFAULT_FONT_SIZE * (MOBILE_MIN_WIDTH / MOBILE_DESIGN_WIDTH)}px;
    }
  }

`
export default GlobalStyle
