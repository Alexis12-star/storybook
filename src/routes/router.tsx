import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
class router extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Link to="/" />
        </Routes>
      </div>
    );
  }
}

export default router;