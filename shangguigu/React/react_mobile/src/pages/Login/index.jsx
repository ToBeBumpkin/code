import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar, Toast, Form, Input, Button } from 'antd-mobile'
import { phoneReg, codeReg } from '../../config/reg'
// import { reqVerifyCode } from '../../ajax/login'
import './index.less'


export default function Login() {
  const navigate = useNavigate()
  const [time, setTime] = useState(10)
  const [formValue, setFormValue] = useState({})
  const [canClick, setCanClick] = useState(true)
  useEffect(() => {
    console.log('didMount');
    console.log(time);
    return ()=>{
      console.log('willUnmount');
    }
  }, [time])
  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
    })
  const login = () => {
    const { phone, code } = formValue
    if (!phone) {
      console.log('手机号不合法')
      Toast.show({
        content: '手机号不合法',
      })
      return
    } else if (!code) {
      console.log('验证码不合法');
      Toast.show({
        content: '验证码不合法',
      })
      return
    }
    console.log(`发起请求，手机号${phone}，验证码${code}`);
    navigate('/user')
  }
  const saveData = (type) => {
    return (value) => {
      if (type === 'phone' && !phoneReg.test(value)) value = ''
      else if (type === 'code' && !codeReg.test(value)) value = ''
      setFormValue({ ...formValue, [type]: value })
    }
  }
  const sendCode = async () => {
    if (!canClick) return
    else if (!formValue.phone) {
      Toast.show({
        content: '上传中',
      })
      return
    }
    setCanClick(false)
    let timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          setTime(10)
          setCanClick(true)
          clearInterval(timer)
        }
        return prevTime - 1
      })
    }, 1000)
    /*
        try {
          const { data: { code, message } } = await reqVerifyCode(phone)
          if (code === 200) console.log('success')
          else console.log('fail');
        } catch (error) {
          console.log(error);
          clearInterval(timer)
          setCanClick(true)
          setTime(10)
        }
        */
  }
  return (
    <div>
      <NavBar onBack={back}>标题</NavBar>
      <Form layout='horizontal'>
        <Form.Item>
          <Input onChange={saveData('phone')} placeholder='请输入手机号' clearable />
        </Form.Item>
        <Form.Item
          extra={
            <div className="extraPart">
              {time}
              <span className={canClick ? 'active' : 'disable'} onTouchEnd={sendCode}>发送验证码</span>
            </div>
          }
        >
          <Input placeholder='请输入验证码' onChange={saveData('code')} clearable />
        </Form.Item>
        <Form.Item>
          <Button onTouchEnd={login} block color='primary' size='large'>
            Block Button
          </Button>
        </Form.Item>

      </Form>
    </div>
  )
}
