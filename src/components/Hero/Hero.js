import { Button, ButtonGroup } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import TableData from '../Hero/Table'
import './hero.css'

const Hero = () => {

  return (
    <div className='hero-section container'>
      <h5 className='my-2'>Postal Ballots</h5>
       <ButtonGroup size="lg" className="mb-2 w-100">
        <Button size='sm'>Current & Forthcoming Postal Ballots</Button>
        <Button size="lg">Past Postal Ballots</Button>
      </ButtonGroup>
      <Table responsive striped hover size="sm">
        <thead>
          <tr>
            <th colSpan={1}>Date of declaration of Postal Ballot</th>
            <th>Record Date</th>
            <th>Closing Date of Postal Ballot</th>
            <th>Date of declaration of Outcome</th>
            <th>Resolution</th>
            <th>Link to Detail Notification</th>
            <th>Broadcast Date</th>

          </tr>
        </thead>
        <tbody>
          {
            TableData?.map((item, index) => (
              <tr key={item.id} className="mb-2">
                {/* <td>{index + 1}</td> */}
                <td>{item.date}</td>
                <td>{item.record}</td>
                <td>{item.closing}</td>
                <td>{item.declaration}</td>
                <td>{item.resolution}</td>
                <td>{item.link}</td>
                <td>{item.broadcast}</td>

              </tr>

            ))
          }
        </tbody>
      </Table>
    </div>

  );
}

export default Hero;