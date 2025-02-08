// LICENSE_CODE ZON
'use strict'; /*jslint browser:true, es6:true*/
const brd_tooltip = {
    init(){
        this.add_tooltip();
        this.set_position();
        this.listeners();
    },
    get_offset(el){
        if (!el)
            return window.innerWidth;
        const container = el.closest('[data-tp_container]');
        let container_width = 0;
        let container_pos = 0;
        let el_pos_rel = {};
        let el_pos = el.getBoundingClientRect();
        if (container)
        {
            container_pos = container.getBoundingClientRect();
            container_width = container.offsetWidth;
            el_pos_rel = {
                top: el_pos.top - container_pos.top,
                left: el_pos.left - container_pos.left,
                bottom: el_pos.bottom - container_pos.bottom,
                right: el_pos.right - container_pos.right,
            };
        }
        else
        {
            container_width = window.innerWidth;
            el_pos_rel = el_pos;
        }
        return container_width - el_pos_rel.right;
    },
    add_tooltip(){
        const tooltips = document.querySelectorAll('.brd_tp');
        if (!tooltips.length)
            return;
        for (let tooltip of tooltips)
        {
            const el = document.createElement('div');
            const el_shadow = document.createElement('div');
            el.classList.add('brd_tp__text');
            el_shadow.classList.add('brd_tp__text', 'brd_tp__text_shadow');
            el_shadow.style.visibility = 'hidden';
            el.innerHTML = tooltip.dataset.content;
            el_shadow.innerHTML = tooltip.dataset.content;
            tooltip.appendChild(el);
            tooltip.appendChild(el_shadow);
        }
    },
    set_position(){
        const tooltips = document.querySelectorAll('.brd_tp');
        if (!tooltips.length)
            return;
        for (let tooltip of tooltips)
        {
            const body_offset = 32;
            const el = tooltip.querySelector('.brd_tp__text');
            if (!el)
                return;
            const el_shadow = tooltip.querySelector('.brd_tp__text_shadow');
            if (!el_shadow)
                return;
            const offset = this.get_offset(el_shadow) - body_offset;
            if (offset<0)
                el.style.setProperty('--tooltip_offset', `${offset}px`);
            else
                el.style.removeProperty('--tooltip_offset');
        }
    },
    listeners(){
        const _this = this;
        window.onresize = ()=>this.set_position();
        document.addEventListener('pricing_table_swiper_init',
            ()=>_this.set_position());
    },
};
brd_tooltip.init();
