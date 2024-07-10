import { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap'
class NavbarComponent extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <span>
                  <span className="angga">Angga</span>  Pats
                </span>
                {''}
                <div>
                  <i>icon work</i>
                </div>

              </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}

export default NavbarComponent;