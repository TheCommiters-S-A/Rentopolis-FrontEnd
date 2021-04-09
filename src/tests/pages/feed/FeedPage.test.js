import {FeedPage} from "../../../pages/FeedPage/FeedPage";
import {configure, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

test('Should render component', () =>{
    shallow(<FeedPage/>);
})