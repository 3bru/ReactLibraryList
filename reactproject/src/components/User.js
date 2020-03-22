import React, { Component } from 'react';

class User extends Component {
render () {

  //Destruction
  const {name,book,page} = this.props;
    return (
      <div>
      <ul>
      <li>Yazar:{name} </li>
      <li>Kitap:{book}</li>
      <li>Sayfa Sayısı:{page}</li>
      <hr/>
      </ul>
      </div>
    )
  }
}
export default User;
