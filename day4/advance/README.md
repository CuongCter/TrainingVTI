# useReducer 
- Là một hook mạnh mẽ trong React, thường được sử dụng cho các state phức tạp và logic cập nhật state phức tạp hơn so với useState. useReducer rất hữu ích khi bạn có nhiều trạng thái hoặc khi trạng thái của bạn phụ thuộc vào các hành động phức tạp.
- Luồng hoạt động của useReducer trong React có thể được mô tả qua các bước sau:
+ Khởi tạo: useReducer được gọi với một hàm reducer và một trạng thái ban đầu (initialState). Nó trả về một mảng gồm hai phần tử: trạng thái hiện tại (state) và hàm dispatch.
+ Gửi hành động (dispatch): Khi cần thay đổi trạng thái, gọi hàm dispatch với một hành động (action). Hành động này là một đối tượng có ít nhất một thuộc tính type và có thể có các thuộc tính bổ sung để chứa dữ liệu cần thiết.
+ Xử lý trong reducer: Hàm reducer nhận trạng thái hiện tại và hành động đã được gửi. Dựa trên action.type, reducer sẽ quyết định cách cập nhật trạng thái và trả về trạng thái mới.
+ Cập nhật trạng thái: Trạng thái mới được trả về từ reducer sẽ thay thế trạng thái hiện tại, và component sẽ được render lại với trạng thái mới này.

# redux 

- React-Redux là một thư viện giúp bạn tích hợp Redux, một thư viện quản lý trạng thái, với React. Redux cung cấp một kho lưu trữ tập trung (store) cho tất cả các trạng thái của ứng dụng, giúp quản lý trạng thái ứng dụng dễ dàng hơn và làm cho dữ liệu của ứng dụng có thể dự đoán được.

- Các khái niệm chính trong Redux:
+ Store: Là nơi lưu trữ toàn bộ trạng thái của ứng dụng.
+ Action: Là các đối tượng chứa thông tin về các hành động cần thực hiện, thường có thuộc tính type để chỉ loại hành động và các thuộc tính khác để chứa dữ liệu liên quan.
+ Reducer: Là các hàm nhận vào trạng thái hiện tại và hành động, sau đó trả về trạng thái mới.
+ Dispatch: Là cách để gửi các hành động đến store.
+ Selector: Là các hàm để lấy dữ liệu từ store.

## Luồng hoạt động 

![Redux](./public/redux.gif)

- Tạo Redux Store: createStore được sử dụng để tạo store từ các reducer.
- Tạo Reducer: combineReducers được sử dụng để kết hợp nhiều reducer lại với nhau. Trong ví dụ này, chúng ta có một reducer cho danh sách todo.
- Cung cấp Store cho Ứng dụng: Provider từ react-redux được sử dụng để bao bọc toàn bộ ứng dụng, cung cấp store cho tất cả các component con.
- Component với Redux: useSelector được sử dụng để lấy dữ liệu từ store. useDispatch được sử dụng để gửi các hành động đến store. 

# redux-saga

- Redux-Saga là một thư viện để quản lý các side effects (hiệu ứng phụ) trong các ứng dụng Redux, chẳng hạn như việc gọi API, xử lý các hành động không đồng bộ (asynchronous actions), và các hoạt động phức tạp khác. Redux-Saga sử dụng các hàm generator của JavaScript để thực hiện các tác vụ này, giúp mã của bạn dễ đọc và dễ quản lý hơn.

- Quản lý side effects: Redux-Saga giúp bạn quản lý các side effects một cách dễ dàng và hiệu quả
- Khả năng test cao: Các hàm generator rất dễ test, giúp bạn viết các test case rõ ràng và dễ hiểu.
- Điều khiển luồng logic: Redux-Saga cho phép bạn viết các logic điều khiển phức tạp mà không làm cho mã của bạn trở nên rối rắm.
- Tách biệt logic: Redux-Saga giúp tách biệt logic không đồng bộ ra khỏi các hành động đồng bộ, làm cho mã của bạn rõ ràng và dễ duy trì hơn.

## Thành phần 

- Saga Middleware: Kết nối giữa Redux store và các saga.
- Effect Creators: Các hàm tạo effect được sử dụng trong saga.
- Saga Functions: Generator functions để định nghĩa các side effect.
- Root Saga: Khởi động tất cả các watcher saga.
- Action Creators và Action Types: Định nghĩa các action và loại action.
- Reducer: Cập nhật state dựa trên các action.
- Store Configuration: Thiết lập Redux store với saga middleware.
- Component: Dispatch action từ các component React.

# Call API

- Việc dùng axios và fetch có thể giúp chúng ta trong việc call API

## axios

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://api.example.com/data')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Data from API</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default AxiosComponent;
```

## Fetch

```javascript
import React, { useState, useEffect } from 'react';

const FetchComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Data from API</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default FetchComponent;
```

## Xử lý bất đồng bộ
- useEffect: Hook này thường được sử dụng để gọi API trong React. Bạn có thể thiết lập useEffect để gọi API khi component được mount hoặc khi các dependencies thay đổi.
- useState: Để quản lý state của dữ liệu, trạng thái tải (loading), và lỗi (error).
- Promise: fetch trả về một Promise, do đó bạn có thể sử dụng .then() và .catch() để xử lý dữ liệu và lỗi.
- Async/Await: Đây là cú pháp tiện lợi hơn để làm việc với các Promise. Bạn có thể sử dụng nó trong một hàm không đồng bộ để làm mã của bạn rõ ràng hơn:

```javascript
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, []);
```
# MUI

- Material-UI (MUI) là một thư viện React phổ biến, cung cấp các thành phần UI dựa trên Material Design của Google. MUI giúp bạn xây dựng giao diện người dùng đẹp mắt, nhất quán và dễ sử dụng mà không cần phải thiết kế từ đầu

## Tính năng chính của MUI

- Component đa dạng: Cung cấp nhiều thành phần UI như buttons, cards, dialogs, forms, navigation, và nhiều hơn nữa.
- Material Design: Tuân theo các nguyên tắc thiết kế của Google, giúp ứng dụng của bạn trông hiện đại và nhất quán.
- Tùy chỉnh dễ dàng: Cung cấp khả năng tùy chỉnh mạnh mẽ với hệ thống theme.
- Hỗ trợ tốt cho React: Tích hợp hoàn hảo với React, tận dụng tối đa các tính năng của React như hooks.
- Documentation và Community: Tài liệu phong phú và cộng đồng người dùng lớn giúp việc học và sử dụng MUI dễ dàng hơn.  

# Formik 

- Formik là một thư viện mạnh mẽ giúp quản lý các form trong ứng dụng React một cách dễ dàng và hiệu quả. Nó giúp bạn xử lý việc xác thực form, theo dõi trạng thái form, và gửi form một cách nhất quán và dễ hiểu. Dưới đây là một hướng dẫn cơ bản về cách sử dụng Formik trong React.

## Sử dụng Yup để xác thực

- Yup là một thư viện phổ biến để xác thực schema, thường được sử dụng cùng với Formik. Bạn có thể định nghĩa các quy tắc xác thực một cách dễ dàng và tích hợp chúng vào Formik.

# SWR