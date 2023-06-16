import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvent.scss";
import useFetch from "../../hooks/useFetch";
import LastEvents from "../LastEvents/LastEvents";


export default function ListLastEvents() {
    const lastEventsFetch = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=9e2ffd6f166951a66ec8abb1db3cf828&hash=961282844f340b77979afff0813190bb&limit=5');


    return (
        <div className="container-list-last-events">
            <Header size="large">Últimos eventos</Header>

            <Container>
                <Card.Group itemsPerRow={5}>
                    <LastEvents lastEventsFetch={lastEventsFetch} />

                </Card.Group>
            </Container>
        </div>
    );
}