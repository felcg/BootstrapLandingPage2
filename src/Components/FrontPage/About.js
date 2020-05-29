import React from 'react'
import {
  Container,
} from 'react-bootstrap'


const About = () => (
  <section className="page-section" id="about">
    <Container>
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Sobre nós</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://images.pexels.com/photos/1006115/pexels-photo-1006115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>2009-2011</h4>
              <h4 className="subheading">Our Humble Beginnings</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>March 2011</h4>
              <h4 className="subheading">An Agency is Born</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li>
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>December 2012</h4>
              <h4 className="subheading">Transition to Full Service</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://images.pexels.com/photos/2448248/pexels-photo-2448248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>July 2014</h4>
              <h4 className="subheading">Phase Two Expansion</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <h4>Seja parte<br />Da Nossa<br />História!</h4>
          </div>
        </li>
      </ul>
    </Container>
  </section>
)

export default About
