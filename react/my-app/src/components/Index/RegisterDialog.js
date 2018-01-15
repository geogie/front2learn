import React, {Component} from 'react';
import {Button, Dialog, Form, Input, Notification} from "element-react";
export default class RegisterDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        email: '',
        password: '',
      },
      loading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    if (nextProps.users.get('saveSuccess') && this.props.visible) {
      Notification.success({
        title: '成功',
        message: '注册成功',
        duration: 1500
      });
      this.props.onClose();
      this.setState({loading: false});
    } else if (nextProps.users.get('error') && this.props.visible) {
      Notification.error({
        title: '错误',
        message: nextProps.users.get('error'),
        type: 'success',
        duration: 1500
      });
      this.setState({loading: false});
    }
  }

  handleSubmit = (e) => {
    console.log('submit!', this.state.user);
    e.preventDefault();

    this.refs.user.validate((valid) => {
      if (valid) {
        this.props.registerActions(this.state.user);
        this.setState({loading: true});
      }
    });
  };

  handleChange = (key, value) => {
    this.setState({
      user: Object.assign(this.state.user, {[key]: value})
    });
  };

  render() {
    return (
      <Dialog
        size="tiny"
        title="注册"
        top="30%"
        customClass="register-dialog"
        closeOnClickModal={false}
        visible={ this.props.visible }
        onCancel={ this.props.onClose }
      >
        <Dialog.Body>
          <Form ref="user" model={this.state.user} className="demo-form-inline">
            <Form.Item required={true} prop="username"
                       rules={{required: true, message: '用户名不能为空', trigger: 'blur'}}
            >
              <Input value={this.state.user.username} placeholder="请输入用户名"
                     onChange={this.handleChange.bind(this, 'username')}/>
            </Form.Item>
            <Form.Item required={true} prop="email"
                       rules={{type: 'email', required: true, message: '邮箱不能为空或格式不正确', trigger: 'blur'}}
            >
              <Input value={this.state.user.email} placeholder="请填写邮箱"
                     onChange={this.handleChange.bind(this, 'email')}/>
            </Form.Item>
            <Form.Item required={true} prop="password"
                       rules={{required: true, message: '密码不能为空', trigger: 'blur'}}
            >
              <Input type="password" value={this.state.user.password} placeholder="请输入密码"
                     onChange={this.handleChange.bind(this, 'password')}/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.handleSubmit} loading={this.state.loading}>
                注册
              </Button>
            </Form.Item>
          </Form>
        </Dialog.Body>
      </Dialog>
    )
  }
}
