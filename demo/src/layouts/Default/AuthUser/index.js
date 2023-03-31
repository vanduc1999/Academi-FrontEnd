import { Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import {User, Image, Role, Name } from './styles'
const AuthUser = () => {

    const navigate = useNavigate();

    const onLogout = (e) =>{
        e.preventDefault();

        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <Dropdown
            menu={{
                items: [
                    {
                        key:"0",
                        label: <a onClick={onLogout}>Logout</a>,
                    },
                ],
            }}
        >
            <User>
                    <Image src='http://loremflickr.com/320/240/'/>

                    <div>
                        <Role>Admin</Role>
                        <Name>Nguyen Van Duc</Name>
                    </div>
            </User>
        </Dropdown>
    )
}
export default AuthUser