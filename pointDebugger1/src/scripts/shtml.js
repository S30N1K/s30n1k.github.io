const shtml = function (selector) {
    this.version = 0.4;

    this.selector = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;

    if (!this.selector.length){
        this.selector = [this.selector];
    }

    this.createElement = function (tagName) {

    };

    this.all = function (cb) {
        for(let i = 0; i < this.selector.length; i ++){
            if (typeof this.selector[i] === "object"){
                cb(this.selector[i]);
            }
        }
        return this;
    };

    this.move = function (container, cb) {

        this.selector[0].onmousedown =  (e) => {
            const offsetX = e.offsetX;
            const offsetY = e.offsetY;
            const lock = $.createElement('div').css({
                zIndex: 51000,
                opacity: .5,
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0
            });

            $('body').append(lock);



            lock.on('mousemove', e => {
                const x = e.pageX - offsetX;
                const y = e.pageY - offsetY;
                container.css({
                    left: x + 'px',
                    top: y + 'px',
                });
                cb && cb(x, y);
            });

            lock.on('mouseup', e => {
                lock.remove();
            });

        };


        return this;
    };

    this.remove = function () {
        this.selector[0].parentNode.removeChild(this.selector[0]);
    };

    this.append = function (e) {
        return this.all(selector => {
            if (typeof e.selector === 'object'){
                for (let i = 0; i < e.selector.length; i ++){
                    selector.appendChild(e.selector[i]);
                }
            } else {
                selector.appendChild(e)
            }
        });
    };

    this.addClass = function (className) {
        return this.all(selector => selector.classList.add(className));
    };

    this.removeClass = function (className) {
        return this.all(selector => selector.classList.remove(className));
    };

    this.issetClass = function (className) {
        return this.selector[0].classList.contains(className);
    };

    this.toggleClass = function (className) {
        return this.all(selector => {
            selector.classList.contains(className) ? selector.classList.remove(className) : selector.classList.add(className);
        });
    };

    this.css = function (key, value) {
        if (typeof key === "string") {

            if (typeof value === "string" || typeof value === "number"){
                return this.all(selector => selector.style[key] = value);
            }

            return window.getComputedStyle(this.selector[0], null)[key];
        }

        for(let i in key){
            this.css(i, key[i]);
        }

        return this;
    };

    this.html = function (value) {
        if (typeof value === "undefined"){
            return this.selector[0].innerHTML;
        }

        return this.all(selector => selector.innerHTML = value);
    };

    this.attr = function (key, value) {
        if (typeof key === "string") {

            if (typeof value !== "undefined"){
                return this.all(selector => selector.setAttribute(key, value));
            }

            return selector.getAttribute(key);
        }

        for(let i in key){
            this.attr(i, key[i]);
        }

        return this;
    };

    this.removeAttr = function (key) {
        return this.all(selector => selector.removeAttribute(key));
    };

    this.parent = function () {
        return $(this.selector[0].parentNode);
    };

    this.val = function (value) {
        if (value){
            return this.all(selector => selector.value = value);
        }
        return this.selector[0].value;
    };

    this.on = function (eventName, cb) {
        return this.all(selector => selector.addEventListener(eventName, cb));
    };

    return this;
};

const $ = function (e) {
    return new shtml(e);
};


const onLoad = [];

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        for (let cb of onLoad){
            cb();
        }
    }
};

$.ready = function (cb) {
    if (document.readyState === 'loading'){
        onLoad.push(cb);
    }
    if (document.readyState === 'interactive' || document.readyState === 'complete'){
        cb();
    }
};

$.createElement = function (tagName) {
    const element = document.createElement(tagName);
    element.onmousemove = element.onmousedown = element.onmouseup = element.onmousewheel = function (e) {
        return e.stopPropagation();
    };
    return $(element);
};

module.exports = $;