import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
import './viewer.css';

export default ({ src, srcs, navbar } = {}, options = {}) => {
    const multiple = !!(srcs && srcs.length);
    const srcIndex = multiple ? srcs.indexOf(src) : 0;

    let $element;
    let $imgs = null;
    if (!multiple) {
        $element = document.createElement('img');
        $element.src = src;
    } else {
        $element = document.createElement('div');
        $imgs = srcs.map((src) => {
            const $img = document.createElement('img');
            $img.src = src;

            $element.appendChild($img);

            return $img;
        });
    }

    const viewer = new Viewer($element, {
        title: false,
        fullscreen: false,
        navbar: navbar !== undefined ? navbar : multiple,
        ...options,
        toolbar: {
            reset: false,
            play: false,
            flipHorizontal: false,
            flipVertical: false,
            prev: multiple,
            next: multiple,
            ...options.toolbar,
        },
        show(...args) {
            options.show && options.show.call(this, ...args);
            // 单击关闭
            viewer.canvas.addEventListener(
                'click',
                (event) => {
                    console.log('hide');
                    if (event.target !== viewer.canvas) {
                        return;
                    }
                    viewer.hide();
                },
                false
            );
        },
        hide(...args) {
            options.hide && options.hide.call(this, ...args);
            setTimeout(() => {
                viewer.destroy();
            }, 1000);
        },
    });

    if (!multiple) {
        $element.click();
    } else {
        $imgs[srcIndex].click();
    }
};
