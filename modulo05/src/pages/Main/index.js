import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Form, SubmitButton, List } from './styles';
import Container from '../../components/Container';

import api from '../../services/api';

export default class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
        error: false,
    }

    componentDidMount() {
        const repositories = localStorage.getItem('repositories');

        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) });
        }
    }

    componentDidUpdate(_, prevState) {
        const { repositories } = this.state;

        if (prevState.repositories !== repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories));
        }
    }

    handleInputChange = e => {
        this.setState({
            newRepo: e.target.value,
            error: false
        });
    }

    handleSubmit = async e => {
        e.preventDefault();



        const { newRepo, repositories } = this.state;

        this.setState({ loading: true });

        try {
            if(repositories.some(repo => repo.name === newRepo)) {
                throw new Error('Repositório duplicado');
            }

            const response = await api.get(`/repos/${newRepo}`);

            const data = {name: response.data.full_name}
            this.setState({
                repositories: [...this.state.repositories, data],
                newRepo: '',
            });
        } catch(e) {
            this.setState({error: true});
        }

        this.setState({ loading: false });
    }

    render() {

        const { newRepo, repositories, loading, error } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositórios
                </h1>
                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Adicionar Repositório"
                        value={newRepo}
                        onChange={this.handleInputChange}
                        error={error ? 1 : 0}
                    />
                    <SubmitButton loading={loading ? 1 : 0}>
                        {loading ? (
                            <FaSpinner color="#FFF" size={14} />
                        ) : (
                            <FaPlus color='#FFF' sice={14} />
                        )}
                    </SubmitButton>
                </Form>

                <List>
                    {repositories.map(repository => (
                        <li key={repository.name}>
                            <span>{repository.name}</span>
                            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}
