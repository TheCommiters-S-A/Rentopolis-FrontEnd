import {renderHook, act} from "@testing-library/react-hooks";
import {ProvideAuth, useAuth} from "../../hooks/use-auth";
import {Header} from "../../components/Header";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {configure, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe('Test case for use-auth hook', () => {

    test('Should have user state', () => {
        const wrapper = ({children}) => <ProvideAuth>{children}</ProvideAuth>
        const {result} = renderHook(() => useAuth(), {wrapper})
        expect(result.current.user).toBeDefined()
    })

    test('Should have signin state', () => {
        const wrapper = ({children}) => <ProvideAuth>{children}</ProvideAuth>
        const {result} = renderHook(() => useAuth(), {wrapper})
        expect(result.current.signin).toBeDefined()
    })

    test('Should have signout state', () => {
        const wrapper = ({children}) => <ProvideAuth>{children}</ProvideAuth>
        const {result} = renderHook(() => useAuth(), {wrapper})
        expect(result.current.signout).toBeDefined()
    })

    test('Should have sendPasswordResetEmail state', () => {
        const wrapper = ({children}) => <ProvideAuth>{children}</ProvideAuth>
        const {result} = renderHook(() => useAuth(), {wrapper})
        expect(result.current.sendPasswordResetEmail).toBeDefined()
    })

    test('Should have sendPasswordResetEmail state', () => {
        const wrapper = ({children}) => <ProvideAuth>{children}</ProvideAuth>
        const {result} = renderHook(() => useAuth(), {wrapper})
        expect(result.current.confirmPasswordReset).toBeDefined()
    })

    test('Should wrong user', () => {
        const wrapper = ({children}) => <ProvideAuth>{children}</ProvideAuth>
        const {result} = renderHook(() => useAuth(), {wrapper})
        act(() => {
            result.current.signin('asdasdasda', 'test123')
            result.current
        })
        expect(result.current.user).toBeFalsy()
    })

    test('Should have ExitToApp', () =>{
        const wrapper = shallow(<Header/>)
        expect(wrapper.find(ExitToAppIcon).exists()).toBeTruthy()
    })

    test('Should have onClick prop', () =>{
        const wrapper = shallow(<Header/>)
        expect(wrapper.find(ExitToAppIcon).prop('onClick')).toBeDefined()
    })

})


