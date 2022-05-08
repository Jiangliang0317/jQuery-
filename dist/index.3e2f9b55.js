window.jQuery = function(selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === 'string') elements = document.querySelectorAll(selectorOrArray);
    else if (selectorOrArray instanceof Array) elements = selectorOrArray;
    //api可以操作elements
    return {
        find (selector) {
            let array = [];
            for(let i = 0; i < elements.length; i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector));
                array = array.concat(elements2);
            }
            array.oldApi = this //this就是api
            ;
            return jQuery(array);
        },
        each (fn) {
            for(let i = 0; i < elements.length; i++)fn.call(null, elements[i], i);
            return this;
        },
        parent () {
            const array = [];
            this.each((node)=>{
                if (array.indexOf(node.parentNode) === -1) array.push(node.parentNode);
                array.push(node.parentNode);
            });
            return jQuery(node.parentNode);
        },
        children () {
            const array = [];
            this.each((node)=>{
                array.push(...node.children);
            });
            return jQuery(array);
        },
        end () {
            return this.oldApi //this就是当前的api:api2;api2的旧api就是api1
            ;
        },
        addClass (className) {
            for(let i = 0; i < elements.length; i++){
                const element = elements[i];
                element.classList.add(className);
            }
            return this;
        },
        oldApi: selectorOrArray.oldApi
    };
};

//# sourceMappingURL=index.3e2f9b55.js.map
