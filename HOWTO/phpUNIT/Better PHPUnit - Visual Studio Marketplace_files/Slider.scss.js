define("OfficeFabric/components/Slider/Slider.scss",["require","exports","@microsoft/load-themed-styles"],function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i.loadStyles([{rawString:".root_e7737db3{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.titleLabel_e7737db3{padding:0}.line_e7737db3{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.line_e7737db3 .lineContainer_e7737db3{border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box}.container_e7737db3{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.valueLabel_e7737db3{-ms-flex-negative:1;flex-shrink:1;width:30px;line-height:1}.slideBox_e7737db3{background:transparent;border:none;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;line-height:28px}.slideBox_e7737db3::-moz-focus-inner{border:0}.slideBox_e7737db3{outline:transparent}.slideBox_e7737db3{position:relative}.ms-Fabric--isFocusVisible .slideBox_e7737db3:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid "},{theme:"focusBorder",defaultValue:"#000000"},{rawString:"}.slideBox_e7737db3 .thumb_e7737db3{border:2px solid "},{theme:"neutralSecondary",defaultValue:"#666666"},{rawString:";-webkit-box-sizing:border-box;box-sizing:border-box;background:"},{theme:"white",defaultValue:"#ffffff"},{rawString:";display:block;width:16px;height:16px;position:absolute;border-radius:10px}.rootIsHorizontal_e7737db3 .line_e7737db3{width:100%}.rootIsHorizontal_e7737db3 .line_e7737db3 .lineContainer_e7737db3{height:4px}.rootIsHorizontal_e7737db3 .slideBox_e7737db3{height:28px;padding:0 8px}.rootIsHorizontal_e7737db3 .slideBox_e7737db3 .thumb_e7737db3{top:-6px}html[dir='ltr'] .rootIsHorizontal_e7737db3 .slideBox_e7737db3 .thumb_e7737db3{-webkit-transform:translateX(-50%);transform:translateX(-50%)}html[dir='rtl'] .rootIsHorizontal_e7737db3 .slideBox_e7737db3 .thumb_e7737db3{-webkit-transform:translateX(50%);transform:translateX(50%)}.rootIsHorizontal_e7737db3 .valueLabel_e7737db3{margin:0 8px;white-space:nowrap;width:40px}.rootIsVertical_e7737db3{margin-right:8px}.rootIsVertical_e7737db3 .line_e7737db3{height:100%;width:4px;margin:0 auto;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.rootIsVertical_e7737db3 .line_e7737db3 .lineContainer_e7737db3{width:4px;height:100%}.rootIsVertical_e7737db3 .slideBox_e7737db3{height:100%;width:28px;padding:8px 0}.rootIsVertical_e7737db3 .slideBox_e7737db3 .thumb_e7737db3{left:-6px;margin:0 auto;-webkit-transform:translateY(8px);transform:translateY(8px)}.rootIsVertical_e7737db3 .container_e7737db3{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;text-align:center;margin:8px 0}.rootIsVertical_e7737db3 .valueLabel_e7737db3{margin:0 auto;white-space:nowrap;width:40px}.activeSection_e7737db3{background:"},{theme:"neutralSecondary",defaultValue:"#666666"},{rawString:"}@media screen and (-ms-high-contrast: active){.activeSection_e7737db3{background-color:WindowText}}.inactiveSection_e7737db3{background:"},{theme:"neutralTertiaryAlt",defaultValue:"#c8c8c8"},{rawString:"}@media screen and (-ms-high-contrast: active){.inactiveSection_e7737db3{border:1px solid WindowText}}.showTransitions_e7737db3 .thumb_e7737db3{-webkit-transition:left .367s cubic-bezier(0.1, 0.9, 0.2, 1);transition:left .367s cubic-bezier(0.1, 0.9, 0.2, 1)}.showTransitions_e7737db3 .activeSection_e7737db3,.showTransitions_e7737db3 .inactiveSection_e7737db3{-webkit-transition:width .367s cubic-bezier(0.1, 0.9, 0.2, 1);transition:width .367s cubic-bezier(0.1, 0.9, 0.2, 1)}.rootIsEnabled_e7737db3 .slideBox_e7737db3:hover .thumb_e7737db3,.rootIsEnabled_e7737db3 .slideBox_e7737db3:active .thumb_e7737db3{border:2px solid "},{theme:"themePrimary",defaultValue:"#0078d4"},{rawString:"}@media screen and (-ms-high-contrast: active){.rootIsEnabled_e7737db3 .slideBox_e7737db3:hover .thumb_e7737db3,.rootIsEnabled_e7737db3 .slideBox_e7737db3:active .thumb_e7737db3{border-color:Highlight}}.rootIsEnabled_e7737db3 .slideBox_e7737db3:hover .activeSection_e7737db3,.rootIsEnabled_e7737db3 .slideBox_e7737db3:active .activeSection_e7737db3{background-color:"},{theme:"themePrimary",defaultValue:"#0078d4"},{rawString:"}@media screen and (-ms-high-contrast: active){.rootIsEnabled_e7737db3 .slideBox_e7737db3:hover .activeSection_e7737db3,.rootIsEnabled_e7737db3 .slideBox_e7737db3:active .activeSection_e7737db3{background-color:Highlight}}.rootIsEnabled_e7737db3 .slideBox_e7737db3:hover .inactiveSection_e7737db3,.rootIsEnabled_e7737db3 .slideBox_e7737db3:active .inactiveSection_e7737db3{background-color:"},{theme:"themeLight",defaultValue:"#c7e0f4"},{rawString:"}@media screen and (-ms-high-contrast: active){.rootIsEnabled_e7737db3 .slideBox_e7737db3:hover .inactiveSection_e7737db3,.rootIsEnabled_e7737db3 .slideBox_e7737db3:active .inactiveSection_e7737db3{border-color:Highlight}}.rootIsEnabled_e7737db3 .slideBox_e7737db3:active .thumb_e7737db3{border:2px solid "},{theme:"themeDarkAlt",defaultValue:"#106ebe"},{rawString:"}.rootIsEnabled_e7737db3 .slideBox_e7737db3:active .activeSection_e7737db3{background-color:"},{theme:"themeDarkAlt",defaultValue:"#106ebe"},{rawString:"}.rootIsDisabled_e7737db3 .thumb_e7737db3{border-color:"},{theme:"neutralTertiaryAlt",defaultValue:"#c8c8c8"},{rawString:"}@media screen and (-ms-high-contrast: active){.rootIsDisabled_e7737db3 .thumb_e7737db3{border-color:GrayText}}@media screen and (-ms-high-contrast: active){.rootIsDisabled_e7737db3 .activeSection_e7737db3,.rootIsDisabled_e7737db3 .inactiveSection_e7737db3{background-color:GrayText;border-color:GrayText}}.rootIsDisabled_e7737db3 .activeSection_e7737db3{background:"},{theme:"neutralTertiaryAlt",defaultValue:"#c8c8c8"},{rawString:"}.rootIsDisabled_e7737db3 .inactiveSection_e7737db3{background:"},{theme:"neutralLight",defaultValue:"#eaeaea"},{rawString:"}\n"}]);t.root="root_e7737db3";t.titleLabel="titleLabel_e7737db3";t.line="line_e7737db3";t.lineContainer="lineContainer_e7737db3";t.container="container_e7737db3";t.valueLabel="valueLabel_e7737db3";t.slideBox="slideBox_e7737db3";t.thumb="thumb_e7737db3";t.rootIsHorizontal="rootIsHorizontal_e7737db3";t.rootIsVertical="rootIsVertical_e7737db3";t.activeSection="activeSection_e7737db3";t.inactiveSection="inactiveSection_e7737db3";t.showTransitions="showTransitions_e7737db3";t.rootIsEnabled="rootIsEnabled_e7737db3";t.rootIsDisabled="rootIsDisabled_e7737db3"});

