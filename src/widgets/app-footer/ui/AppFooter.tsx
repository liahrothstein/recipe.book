import { Layout, Typography } from "antd";

import './AppFooter.scss';

export function AppFooter() {
    const { Footer } = Layout;
    const { Text } = Typography;

    return (
        <Footer>
            <Text>© 2024 Все права защищены</Text>
        </Footer>
    )
}
