import React, { Component } from 'react';

export class Admin extends Component {
  state = { selectedFile: '', busy: false };

  onChange = (event) => {
    event.persist();
    console.log(event);

    this.setState({
      selectedFile: event.target.files[0],
      busy: false
    });
  };

  onSubmit = () => {
    const data = new FormData();
    data.append('file', this.state.selectedFile, this.state.selectedFile.name);
  };

  render() {
    const { selectedFile, busy } = this.state;
    const { onChange, onSubmit } = this;

    return (
      <div className="admin">
        <form className="import-league-form" onSubmit={onSubmit}>
          <p>
            <label htmlFor="file-selector">Select File</label>
            <input id="file-selector" type="file" onChange={onChange} disabled={busy} />
          </p>
          <p>
            <button type="submit" className="file-upload-button" disabled={busy}>Upload</button>
          </p>
        </form>
      </div>
    );
  }
}

