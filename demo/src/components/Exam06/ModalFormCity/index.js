import { useEffect } from "react";
import { Form, Input, Select, Modal } from "antd";
import { PageNumber } from "./styles";

const ModalFormCity = ({ loading, open, setOpen, formData, onSubmit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  useEffect(() => {
    if (open && formData.id) {
      form.setFieldsValue(formData);
    }
  }, [open, formData]);

  const onOk = async () => {
    const values = await form.validateFields();
    onSubmit(formData.id, values);
  };

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} confirmLoading={loading} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Thành Phố"
          rules={[{ required: true, message: "Thành Phố là bắt buộc" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="country"
          label="Quốc Gia"
          rules={[{ required: true, message: "Quốc Gia là bắt buộc" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="countryCode"
          label="Mã Quốc Gia"
          rules={[{ required: true, message: "Mã Quốc Gia là bắt buộc" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="population"
          label="Dân Số"
          rules={[{ required: true, message: "Dân Số là bắt buộc" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="countryFlag" label="Quốc Kỳ">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalFormCity;
