'use strict';

class URLParser {
    #url = null;

    constructor(url) {
        this.#url = url;
    }

    get originUrl () {
        return this.#url;
    }

    get protocol() {
        const protocolLastIndex = this.#url.indexOf(':');
        const protocol = this.#url.slice(0, protocolLastIndex + 1);
        return protocol;
    }

    get #findHostNameIndexes() {
        const hostNameFirstIndex = this.#url.indexOf('://') + 3;
        const hostNameLastIndex = this.#url.indexOf('/', hostNameFirstIndex);
        return {hostNameFirstIndex, hostNameLastIndex};
    }

    get hostname() {
        const hostName = this.#url.substring(this.#findHostNameIndexes.hostNameFirstIndex, this.#findHostNameIndexes.hostNameLastIndex);
        return hostName;
    }

    get path() {
        const pathStartIndex = this.#url.indexOf('/', this.#findHostNameIndexes.hostNameLastIndex);
        let pathEndIndex = this.#url.indexOf('?');
        if(pathEndIndex === -1) {
            pathEndIndex = this.#url.length;
        }
        const path = this.#url.substring(pathStartIndex, pathEndIndex);
        return path;
    }

    get queryParams() {
        const queryStart = this.#url.indexOf('?');
        if(queryStart === -1) return {};
        const querySearch = this.#url.substring(queryStart, this.#url.length);
        const cutQuestMark = querySearch.substring(1);
        const pairs = cutQuestMark.split('&');
        const params = {};
       for(const pair of pairs) {
           const keyValue = pair.split('=');
           params[keyValue[0]] = keyValue[1];
       }
       return params;
    }
}

const url = new URLParser('https://example.com/products/item?search=book&page=2');
console.log('Original URL', url.originUrl);
console.log('Protocol:', url.protocol);
console.log('HostName:', url.hostname);
console.log('Path:', url.path);
console.log('Search:', url.queryParams);