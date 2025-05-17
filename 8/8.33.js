import React, { useState, useEffect } from 'react';
import { Table, Input, Button } from 'antd';
import useWebSocket from 'react-use-websocket';

const columns = [
  {
    title: 'Город',
    dataIndex: 'city',
    sorter: (a, b) => a.city.localeCompare(b.city),
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div>
        <Input onChange={e => setSelectedKeys(e.target.value)} />
        <Button onClick={() => confirm()} typeprimary>
          Применить
        </Button>
        <Button onClick={() => clearFilters()}>
          Сбросить
        </Button>
      </div>
    ),
    filterIcon: () => <SearchOutlined />,
    onFilter: (value, record) => record.city.includesvalue,
  },
  {
    title: 'Компания',
    dataIndex: 'company',
    sorter: (a, b) => a.company.localeCompare(b.company),
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div>
        <Input onChange={e => setSelectedKeys(e.target.value)} />
        <Button onClick={() => confirm()} type="primary">
          Применить
        </Button>
        <Button onClick={() => clearFilters()}>
          Сбросить
        </Button>
      </div>
    ),
filterIcon: () => <SearchOutlined />,
    onFilter: (value, record) => record.company.includes(value),
  },
  {
    title: 'Численность персонала',
    dataIndex: 'staffCount',
    sorter: (a, b) => a.staff - b.staff,
  },
  {
    title: 'С какого года клиент',
    dataIndex: 'clientSince',
    sorter: (a, b) => a.clientSince - b.clientSince,
  },
  {
    title: 'Число серверов',
    dataIndex: 'serverCount',
    sorter: (a, b) => a.serverCount - b.serverCount,
  },
];

const WebsocketTable = () => {
  const [data, setData] = useState([]);
  // Оставлено как есть
  const { sendMessage, lastMessage } = useWebSocket('://:8080', {
    onOpen: () => console.log('Connected'),
    onMessage: (message) => {
      setData([...data, JSON.parse(message.data)]);
    },
    onError: (error) => console.log('Error:', error),
});

useEffect(() => {
    if (lastMessage !== null) {
      setData([...data, JSON.parse(lastMessage.data)]);
    }
  }, [lastMessage]);

  return (
    <Table
      columns={columns}
      dataSource={data}
      {/** Оставлено как есть. Однако вы можете настроить объект пагинации прочитав документацию https://ant.design/components/table#table-demo-pagination */}
      pagination={}
      rowKey="id"
    />
  );
};

export default WebsocketTable;
