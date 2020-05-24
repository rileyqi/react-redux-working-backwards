(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(t,e,r){"use strict";r.r(e);var s=r(43),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"store"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[t._v("#")]),t._v(" Store")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://redux.js.org/api/store#store",target:"_blank",rel:"noopener noreferrer"}},[t._v("official doc"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("A store is not a class. It's just an object with a few methods on it:\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://redux.js.org/api/store#getstate",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("getState()")]),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://redux.js.org/api/store#dispatchaction",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("dispatch(action)")]),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://redux.js.org/api/store#subscribelistener",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("subscribe(listener)")]),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://redux.js.org/api/store#replacereducernextreducer",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("replaceReducer(nextReducer)")]),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("To create it, pass your root reducing function to "),r("code",[t._v("createStore")])])]),t._v(" "),r("h2",{attrs:{id:"create-redux-store"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-redux-store"}},[t._v("#")]),t._v(" Create Redux Store")]),t._v(" "),r("h3",{attrs:{id:"createstore-from-redux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#createstore-from-redux"}},[t._v("#")]),t._v(" "),r("code",[t._v("createStore")]),t._v(" from redux")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://redux.js.org/api/createstore",target:"_blank",rel:"noopener noreferrer"}},[t._v("official doc"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("type "),r("code",[t._v("(reducer, preloadedState?, enhancer?) => Store")])])]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createStore"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" applyMiddleware "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redux'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("reducer")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reducer"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Use Redux'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyMiddleware")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logger"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("h3",{attrs:{id:"configurestore-from-reduxjs-toolkit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configurestore-from-reduxjs-toolkit"}},[t._v("#")]),t._v(" "),r("code",[t._v("configureStore")]),t._v(" from @reduxjs/toolkit")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://redux-toolkit.js.org/api/configureStore",target:"_blank",rel:"noopener noreferrer"}},[t._v("official doc"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("type\n"),r("code",[t._v("(options: {reducer, middleware?, devTools?, preloadedState?, enhancers?}) => Store")])])]),t._v(" "),r("p",[r("code",[t._v("configureStore")]),t._v(" wraps "),r("code",[t._v("createStore")]),t._v(" to provide simplified configuration options\nand good defaults. It can automatically combine your slice reducers, adds\nwhatever Redux middleware you supply, includes "),r("code",[t._v("redux-thunk")]),t._v(" by default, and\nenables use of the Redux DevTools Extension.")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" configureStore "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@reduxjs/toolkit'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" rootReducer "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./reducers'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("configureStore")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" reducer"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" rootReducer "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The store now has redux-thunk added and the Redux DevTools Extension is turned on")]),t._v("\n")])])]),r("h2",{attrs:{id:"accessing-the-store-from-react-components"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-store-from-react-components"}},[t._v("#")]),t._v(" Accessing the Store from React Components")]),t._v(" "),r("h3",{attrs:{id:"usestore-hook-from-react-redux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usestore-hook-from-react-redux"}},[t._v("#")]),t._v(" "),r("code",[t._v("useStore")]),t._v(" hook from react-redux")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://react-redux.js.org/api/hooks#usestore",target:"_blank",rel:"noopener noreferrer"}},[t._v("official doc"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);