import React, { useState } from 'react';
import styles from "../Home/Home.module.css"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Slider, theme } from 'antd';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import logo from "../../../public/images/logo.png"
import { TiAdjustBrightness } from "react-icons/ti";

const { Header, Sider, Content } = Layout;

export const Home = () => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    };

    return (
        <div>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} >
                    <div className={styles.logo}>
                        <img  className={styles.logo_img} src={logo} alt="logo" />
                        <h2>Loyal Uz</h2>
                    </div>
                    <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{
                        background: '#4caf50',
                        minHeight: '100vh',
                        padding: "20px 5px",
                    }}
                >
                    <Menu.Item key="1" icon={<TiAdjustBrightness />}>
                        <Link to="categories">Categories </Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<TiAdjustBrightness />}>
                        <Link to="faqs">Faqs</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<TiAdjustBrightness />}>
                        <Link to="news">News</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<TiAdjustBrightness />}>
                        <Link to="location">Location</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<TiAdjustBrightness />}>
                        <Link to="cars">Cars</Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<TiAdjustBrightness />}>
                        <Link to="sources">Sources</Link>
                    </Menu.Item>
                </Menu>
                    
                </Sider >
                <Layout>
                    <Header style={{ padding: 15, background: colorBgContainer, display: "flex", alignItems:"center", justifyContent: "space-between"}}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <button className={styles.logOut} onClick={logout}>
                            <p>Logout</p>
                        </button>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                          <Routes>
                        <Route path="categories" />
                        <Route path="faqs" />
                        <Route path="news" />
                        <Route path="location" />
                        <Route path="cars" />
                        <Route path="sources"/>
                    </Routes>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
