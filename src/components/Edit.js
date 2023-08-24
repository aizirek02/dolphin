import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Form, Input, Select, Modal, Button } from "antd";
import { setOpenModal, setButtonType } from "./slice";

function Edit() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.productSlice.isOpen);

  const originalData = useSelector((state) => state.productSlice.originalData);
  const selectedId = useSelector((state) => state.productSlice.selectedId);
  const buttonType = useSelector((state) => state.productSlice.buttonType);

  const handleAddProduct = (event) => {
    event.preventDefault();
    let values = form.getFieldsValue();
    console.log(values);
    window.location.reload();

    if (buttonType == "add") {
      fetch("http://localhost:3000/lists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((lists) => {});
    } else if (buttonType == "edit") {
      fetch(`http://localhost:3000/lists/${selectedId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((lists) => {});
    }
  };

  useEffect(() => {
    for (var i = 0; i < originalData.length; i++) {
      if (selectedId === originalData[i].id) {
        form.setFieldsValue(originalData[i]);
      }
      console.log(originalData[i]);
    }
  }, [modalIsOpen]);

  return (
    <Modal
      onOk={handleAddProduct}
      open={modalIsOpen}
      onCancel={() => {
        dispatch(setOpenModal(false));
      }}
    >
      <Form
        form={form}
        name="wrap"
        labelCol={{
          flex: "110px",
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Category" name="category">
          <Select>
            <Select.Option value="car">Car</Select.Option>
            <Select.Option value="home">Home</Select.Option>
            <Select.Option value="clothes">Clothes</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Title..."
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="url"
          label="Photo URL"
          rules={[
            {
              required: true,
            },
            {
              type: "url",
              warningOnly: true,
            },
            {
              type: "string",
              min: 6,
            },
          ]}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item label=" "></Form.Item>
      </Form>
    </Modal>
  );
}

export default Edit;
