import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons';

const BottomMenu = () => (
  <footer id="bottom" className="footer mt-auto py-3">
    <Container>
      <Row>
        <h1><strong>HOME OF DUKE KAHANAMOKU</strong></h1>
        <div>
          <p>
            Make yourself at home, where the legend Duke Kahanamoku grew up swimming, surfing, canoeing and bodysurfing. In 1929, Duke rode a monster wave for 1 1/8 miles at Waikiki, likely the longest ride in modern times. You know that image in your mind
            of Waikiki Beach, the one with Diamond Head in the distance and outrigger canoes in a turquoise bay of warm water? It’s real and it’s here every day. Splash, body surf or surf, in the warm, turquoise water just below Hawaii’s icon, Diamond Head
            – just like Duke did.
          </p>
        </div>
      </Row>
      <Row>
        <div className="container" id="bottomMenu">
          <ul className="nav justify-content-center">
            <li className="p-3"><strong>TS RESTAURANTS</strong></li>

            <li className="p-3"><strong>JOIN THE TEAM</strong></li>

            <li className="p-3"><strong>BUY GIFT CARDS</strong></li>

            <li className="p-3"><strong>WHAT IS HULA PIE</strong></li>

            <li className="p-3"><strong>LEGACY OF ALOHA</strong></li>

            <li className="p-3"><strong>AWARDS</strong></li>

            <li className="p-3"><strong>CALL 808.922.2268</strong></li>

            <li className="p-3"><Facebook /></li>

            <li className="p-3"><Twitter /></li>

            <li className="p-3"><Instagram /></li>

          </ul>
        </div>
      </Row>
    </Container>
  </footer>
);

export default BottomMenu;
