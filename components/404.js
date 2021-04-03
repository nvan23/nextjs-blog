import Link from 'next/link'
import { Result, Button } from 'antd'

import 'antd/dist/antd.css'

export default function PageNotFound () {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary"><Link href="/">Back Home</Link></Button>}
    />
  )
}