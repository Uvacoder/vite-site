import Tabs from './components/tabs'
import Icon from './components/icon'
import Button from './components/button'
import Message from './components/message'

import ClickOutside from './directives/clickoutside'
import {App} from 'vue'

const components: Record<string, any> = {
    Icon,
    Tabs,
    Button,
    Message
}

function install(_Vue: App, opts = {}) {
    Object.keys(components).forEach((key) => {
        _Vue.use(components[key]);
    });
    _Vue.directive('clickoutside',ClickOutside)
}

// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
    // @ts-ignore
    install(window.Vue);
}

export {
    install
}

export default {
    ...components,
    ClickOutside,
    install
}