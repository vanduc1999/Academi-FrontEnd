import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

///Form Login
const FormLogin = (props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
    // do somethings
    if (values.email === "admin@gmail.com" && values.password === "admin123") {
      localStorage.setItem('token', `${values.email}${values.password}`)
      navigate("/dashboard");
    } else {
      message.error("Thông tin đăng nhập không đúng");
    }
  };

  // apiLogin(values).then(res) => {
  //   if (res.token) {
  //     navigate("/dashboard");
  //   } else {
  //     message.error("Thông tin đăng nhập không đúng");
  //   }
  

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
