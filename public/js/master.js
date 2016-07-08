function createSection(keyHoder, valueHolder) {
    var divSection = createEle("div", {
        className: "divSection",
        id: "divSection"
    });

    var typeInput = createEle("input", {
        className: "typeInput",
        id: "typeInput",
        placeholder: keyHoder,
        type: "text",
        size: "20"
    });
    divSection.appendChild(typeInput);

    var addSectionBtn = createEle("button", {
        className: "addSectionBtn",
        id: "addSectionBtn",
        innerHTML: "+"
    });
    addSectionBtn.onclick = function(e) {
        divSection.removeChild(e.target);
        addSection(keyHoder, valueHolder);
    };
    divSection.appendChild(addSectionBtn);

    var ulItems = createEle("ul", {
        className: "ulItems"
    });
    ulItems.appendChild(createItem(ulItems, valueHolder));
    divSection.appendChild(ulItems);

    return divSection;
}

function createItem(ulItems, valueHolder) {
    var liItem = createEle("li", {
        className: "liItem"
    });
    liItem.appendChild(createEle("input", {
        placeholder: valueHolder,
        size: "100"
    }));
    liItem.appendChild(createEle("button", {
        className: "addItemBtn",
        id: "addItemBtn",
        innerHTML: "+",
        onclick: function(e) {
            liItem.removeChild(e.target);
            ulItems.appendChild(createItem(ulItems, valueHolder));
        }
    }));
    return liItem;
}

function addSection(keyHoder, valueHolder) {
    container.insertBefore(createSection(keyHoder, valueHolder), $("submitWebBtn"));
}

function getItems(lis) {
    var items = [];
    for (var i = 0; i < lis.length; i++) {
        var itemText = lis[i].firstChild.value;
        if (itemText) items.push(itemText);
    }
    return items;
}

function getApi() {
    var api = {};
    var nodes = container.childNodes;
    for (var i = 0; i < nodes.length - 1; i++) {
        var node = nodes[i];
        var key = node.firstChild.value;
        if (key) api[key] = getItems(node.lastChild.childNodes);
    }
    return api;
}

function getContents() {
    var contens = [];
    var nodes = container.childNodes;
    for (var i = 0; i < nodes.length - 1; i++) {
        var node = nodes[i];
        var type = node.firstChild.value;
        if (type) {
            contens.push({
                name: type,
                itmes: getItems(node.lastChild.childNodes)
            });
        }
    }
    return contens;
}

function postData(api, data, resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', api);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                reject();
            }
        }
    };
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}

function fetchData(url, resolve, reject, complete) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                complete();
                resolve(JSON.parse(this.response));
            } else {
                complete();
                reject();
            }
        }
    };
    xhr.send();
}

function createEle(name, attrObj) {
    var ele = document.createElement(name);
    for (var key in attrObj) {
        ele[key] = attrObj[key];
    };
    return ele;
}

function $(id) {
    return document.getElementById(id);
}

function getRadioValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}