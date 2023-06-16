import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/useFetch";
export default function Series() {
    const listSeries = useFetch('http://gateway.marvel.com/v1/public/series?ts=1&apikey=9e2ffd6f166951a66ec8abb1db3cf828&hash=961282844f340b77979afff0813190bb&limit=20');
    
    return (
        <div>
            <div className="series-page">
                <div id="slide-series-image" />
                <Grid>
                    <Grid.Column>
                        <Container bg="light">
                            <Header as="h2">Las últimas series de Marvel</Header>
                            <ListSeries listSeries={listSeries} />
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
}