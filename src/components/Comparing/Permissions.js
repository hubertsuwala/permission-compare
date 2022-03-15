import { IconMinus, IconCheck } from '@tabler/icons';

import './Permissions.css';

const Permissions = (props) => (
  <>
    {props.dane.map(
      (dana, i) =>
        props.name === dana.name && (
          <div className="perm-cont" key={i}>
            <div>{dana.read ? <IconCheck /> : <IconMinus />}</div>
            <div>{dana.create ? <IconCheck /> : <IconMinus />}</div>
            <div>{dana.update ? <IconCheck /> : <IconMinus />}</div>
            <div>{dana.delete ? <IconCheck /> : <IconMinus />}</div>
          </div>
        )
    )}
  </>
);

export default Permissions;
