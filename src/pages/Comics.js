import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics";
import useFetch from "../hooks/useFetch";

export default function Comics() {
    const [renderComics, setRenderComics] = useState(10);
    const listComics = useFetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=9e2ffd6f166951a66ec8abb1db3cf828&hash=961282844f340b77979afff0813190bb&limit=${renderComics}`);
    console.log(listComics);
    return (
        <div className="comics-page">
            <div id="slide-comics-image" />
            <Grid>
                <Grid.Column>
                    <Container bg="light">
                        <Header as="h2">Los mejores Comics</Header>
                        <ListComics
                            listComics={listComics}
                            renderComics={renderComics}
                            setRenderComics={setRenderComics}
                        />
                    </Container>
                </Grid.Column>
            </Grid>
        </div>
    );
}