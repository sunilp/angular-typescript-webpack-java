import "angular";
import "angular-mocks";
import "../../index";
import {TweetTopbarController} from "./TweetTopbarController";
import {ComponentTest} from "../../../../util/ComponentTest";
import {ITopbarModel} from "../../../core/models/int/ITopbarModel";
import {ISharedModel} from "../../../core/models/int/ISharedModel";

describe("Component TweetTopbarComponent", () => {
    var directiveTest: ComponentTest<TweetTopbarController>;
    var sharedModelMock: ISharedModel;
    var topbarModelMock: ITopbarModel;
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        topbarModelMock = <ITopbarModel>jasmine.createSpyObj("topbarModel", ["toggleCollapsed", "addTweet"]);
        sharedModelMock = <ISharedModel>jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
        $provide.service("ISharedModel", () =>  sharedModelMock);
        $provide.service("ITopbarModel", () =>  topbarModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TweetTopbarController>("<tweet-topbar></tweet-topbar>", "tweetTopbar");
    });

    it("should expose the sharedModel", () => {
        var vm: TweetTopbarController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
    it("should expose the topbarModel", () => {
        var vm: TweetTopbarController = directiveTest.createComponent({});
        expect(vm.model).toEqual(topbarModelMock);
    });

    describe("on toggleCollapsed()", () => {
        it("should collapse the topbar", () => {
            var vm: TweetTopbarController = directiveTest.createComponent({});
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
    describe("on post()", () => {
        it("should post a tweet", () => {
            var vm: TweetTopbarController = directiveTest.createComponent({});
            vm.post();
            expect(vm.model.addTweet).toHaveBeenCalled();
        });
    });
});

