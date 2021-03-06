import React, { PropTypes } from 'react';
import { Panel, Button } from 'react-bootstrap';
import SmartThingsDevices from '../containers/devices';

const SmartThingsDashboard = ({ smartthingsConnected }) => (
  <Panel>
    {smartthingsConnected ?
      <div>
        <h4 className='text-center'>SmartThings Devices</h4>
        <hr/>
        <SmartThingsDevices/>
      </div>
      :
      <div>
        <h4>Not connected!</h4>
        <a href='/'><Button bsStyle='primary'>Back to dashboard</Button></a>
      </div>
    }
  </Panel>
);

SmartThingsDashboard.propTypes = {
  smartthingsConnected: PropTypes.bool.isRequired
};

export default SmartThingsDashboard;
