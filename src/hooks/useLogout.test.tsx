import { renderHook, act } from "@testing-library/react";
import useLogout from "./useLogout";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe("useLogout hook", () => {
    test("calls Logout function", async () => {
        const { result } = renderHook(() => useLogout());
        act(() => {
            result.current.logout();
        });
    })
})