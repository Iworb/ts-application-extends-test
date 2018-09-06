import { SearchResultChecked } from './SearchResultChecked';

class ApplicationController implements ng.IController {
    public $onInit() { }
    public isChrome: boolean;
    public identity: any;
    public src: library.SearchResult;
    public message: string;

    constructor(
    ) {
        "ngInject";
        this.src = new library.SearchResult();
        this.src.object_type = 'a';
        this.src.id = '1';
        this.src.item = 'item';
        this.src.type = 'type';
    }

    public check(): void {
        const checked = new SearchResultChecked();
        Object.assign(checked, this.src);
        this.message = JSON.stringify(checked);
    }
}

angular
    .module('application', [
        'library',
    ])
    .controller('applicationController', ApplicationController);


