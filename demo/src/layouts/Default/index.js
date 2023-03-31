import { Button } from "antd";
// import { }
import { Link, useNavigate } from "react-router-dom";
import { BorderRightOutlined, UserOutlined } from "@ant-design/icons"
import { Header, Footer, Main, Sidebar, Content, Layout, Logo, MenuItem, } from "./styles";
import AuthUser from "./AuthUser"

const DefaulLayout = ({ children }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Layout>
      <Sidebar>
        <Logo>Green Academy</Logo>
        <MenuItem>
          <Link to="/students"> <UserOutlined /> Students</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/dashboard"><BorderRightOutlined />Dashboard</Link>
        </MenuItem>
      </Sidebar>

      <Content>
        <Main>
          <Header>
            <AuthUser>
              
            </AuthUser>

          </Header>
          {children}
        </Main>
        <Footer>Power by VanDuc</Footer>
      </Content>
    </Layout>




  );
};
export default DefaulLayout;
