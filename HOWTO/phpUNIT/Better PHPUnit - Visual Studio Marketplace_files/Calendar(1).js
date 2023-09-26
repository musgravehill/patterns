define("OfficeFabric/components/Calendar/Calendar",["require","exports","tslib","react","../../utilities/dateValues/DateValues","./CalendarDay","./CalendarMonth","../../utilities/dateMath/DateMath","../../Utilities","./Calendar.scss"],function(n,t,i,r,u,f,e,o,s,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=h,l={leftNavigation:"Up",rightNavigation:"Down"},a=[u.DayOfWeek.Monday,u.DayOfWeek.Tuesday,u.DayOfWeek.Wednesday,u.DayOfWeek.Thursday,u.DayOfWeek.Friday,],v={formatMonthDayYear:function(n,t){return t.months[n.getMonth()]+" "+n.getDate()+", "+n.getFullYear()},formatMonthYear:function(n,t){return t.months[n.getMonth()]+" "+n.getFullYear()},formatDay:function(n){return n.getDate().toString()},formatYear:function(n){return n.getFullYear().toString()}},y=function(n){function t(t){var i=n.call(this,t)||this,r;return i._dayPicker=s.createRef(),i._monthPicker=s.createRef(),i._navigateDayPickerDay=function(n){i.setState({navigatedDayDate:n,navigatedMonthDate:n})},i._navigateMonthPickerDay=function(n){i.setState({navigatedMonthDate:n})},i._onNavigateDayDate=function(n,t){i._navigateDayPickerDay(n);i._focusOnUpdate=t},i._onNavigateMonthDate=function(n,t){if(!t){i._navigateMonthPickerDay(n);i._focusOnUpdate=t;return}i.state.isDayPickerVisible||i._onSelectDate(n);i._navigateDayPickerDay(n)},i._onSelectDate=function(n,t){var r=i.props.onSelectDate;i.setState({selectedDate:n});r&&r(n,t)},i._onHeaderSelect=function(n){i.setState({isDayPickerVisible:!i.state.isDayPickerVisible,isMonthPickerVisible:!i.state.isMonthPickerVisible});n&&(i._focusOnUpdate=!0)},i._onClear=function(){i._onSelectDate(undefined,undefined)},i._onClearKeyDown=function(n){n.which===13&&(n.preventDefault(),i._onClear())},i._onGotoToday=function(){var n=i.props,r=n.dateRangeType,u=n.firstDayOfWeek,t=n.today,f=n.workWeekDays,e=o.getDateRangeArray(t,r,u,f);i._onSelectDate(t,e);i._navigateDayPickerDay(t)},i._onGotoTodayKeyDown=function(n){n.which===13&&(n.preventDefault(),i._onGotoToday())},i._onDatePickerPopupKeyDown=function(n){switch(n.which){case 13:n.preventDefault();break;case 8:n.preventDefault();break;case 27:i._handleEscKey(n)}},i._handleEscKey=function(){i.props.onDismiss&&i.props.onDismiss()},r=t.value&&!isNaN(t.value.getTime())?t.value:t.today||new Date,i.state={selectedDate:r,navigatedDayDate:r,navigatedMonthDate:r,isMonthPickerVisible:i.props.showMonthPickerAsOverlay?!1:i.props.isMonthPickerVisible,isDayPickerVisible:i.props.showMonthPickerAsOverlay?!0:i.props.isDayPickerVisible},i._focusOnUpdate=!1,i}return i.__extends(t,n),t.prototype.componentWillReceiveProps=function(n){var r=n.autoNavigateOnSelection,t=n.value,i=n.today,u=i===void 0?new Date:i,f=r&&!o.compareDates(t,this.props.value);f&&this.setState({navigatedMonthDate:t,navigatedDayDate:t});this.setState({selectedDate:t||u})},t.prototype.componentDidUpdate=function(){this._focusOnUpdate&&(this.focus(),this._focusOnUpdate=!1)},t.prototype.render=function(){var n=this.props,g=n.firstDayOfWeek,nt=n.dateRangeType,u=n.strings,o=n.showMonthPickerAsOverlay,tt=n.autoNavigateOnSelection,y=n.showClear,h=n.showGoToToday,it=n.highlightCurrentMonth,rt=n.highlightSelectedMonth,p=n.navigationIcons,w=n.minDate,b=n.maxDate,ut=n.className,i=this.state,ft=i.selectedDate,k=i.navigatedDayDate,et=i.navigatedMonthDate,t=i.isMonthPickerVisible,l=i.isDayPickerVisible,d=o?this._onHeaderSelect:undefined,ot=!o&&!l,st=o&&h,ht=y||h,a,v;return r.createElement("div",{className:s.css("ms-DatePicker",c.root,ut),role:"application"},r.createElement("div",{className:s.css("ms-DatePicker-picker ms-DatePicker-picker--opened ms-DatePicker-picker--focused",c.picker,c.pickerIsOpened,c.pickerIsFocused,t&&"ms-DatePicker-monthPickerVisible "+c.monthPickerVisible,t&&l&&"ms-DatePicker-calendarsInline "+c.calendarsInline,ot&&"ms-DatePicker-monthPickerOnly "+c.monthPickerOnly,o&&"ms-DatePicker-monthPickerAsOverlay "+c.monthPickerAsOverlay)},r.createElement("div",{className:s.css("ms-DatePicker-holder ms-slideDownIn10",c.holder,st&&c.holderWithButton),onKeyDown:this._onDatePickerPopupKeyDown},r.createElement("div",{className:s.css("ms-DatePicker-frame",c.frame)},r.createElement("div",{className:s.css("ms-DatePicker-wrap",c.wrap,h&&c.goTodaySpacing)},l&&r.createElement(f.CalendarDay,{selectedDate:ft,navigatedDate:k,today:this.props.today,onSelectDate:this._onSelectDate,onNavigateDate:this._onNavigateDayDate,onDismiss:this.props.onDismiss,firstDayOfWeek:g,dateRangeType:nt,autoNavigateOnSelection:tt,strings:u,onHeaderSelect:d,navigationIcons:p,showWeekNumbers:this.props.showWeekNumbers,firstWeekOfYear:this.props.firstWeekOfYear,dateTimeFormatter:this.props.dateTimeFormatter,showSixWeeksByDefault:this.props.showSixWeeksByDefault,minDate:w,maxDate:b,workWeekDays:this.props.workWeekDays,componentRef:this._dayPicker}),l&&t&&r.createElement("div",{className:c.divider}),t&&r.createElement(e.CalendarMonth,{navigatedDate:et,selectedDate:k,strings:u,onNavigateDate:this._onNavigateMonthDate,today:this.props.today,highlightCurrentMonth:it,highlightSelectedMonth:rt,onHeaderSelect:d,navigationIcons:p,dateTimeFormatter:this.props.dateTimeFormatter,minDate:w,maxDate:b,componentRef:this._monthPicker}),ht&&r.createElement("div",{className:s.css(c.calendarButtons)},y&&r.createElement("button",{role:"button",className:s.css("ms-DatePicker-clear js-clear",c.goToday,(a={},a[c.goTodayInlineMonth]=t,a)),onClick:this._onClear,onKeyDown:this._onClearKeyDown,tabIndex:0},u.clear),h&&r.createElement("button",{role:"button",className:s.css("ms-DatePicker-goToday js-goToday",c.goToday,(v={},v[c.goTodayInlineMonth]=t,v)),onClick:this._onGotoToday,onKeyDown:this._onGotoTodayKeyDown,tabIndex:0},u.goToToday)))))))},t.prototype.focus=function(){this.state.isDayPickerVisible&&this._dayPicker.current?this._dayPicker.current.focus():this.state.isMonthPickerVisible&&this._monthPicker.current&&this._monthPicker.current.focus()},t.defaultProps={onSelectDate:undefined,onDismiss:undefined,isMonthPickerVisible:!0,isDayPickerVisible:!0,showMonthPickerAsOverlay:!1,value:undefined,today:new Date,firstDayOfWeek:u.DayOfWeek.Sunday,dateRangeType:u.DateRangeType.Day,autoNavigateOnSelection:!1,showGoToToday:!0,strings:null,highlightCurrentMonth:!1,highlightSelectedMonth:!1,navigationIcons:l,showWeekNumbers:!1,firstWeekOfYear:u.FirstWeekOfYear.FirstDay,dateTimeFormatter:v,showSixWeeksByDefault:!1,workWeekDays:a},t}(s.BaseComponent);t.Calendar=y});

