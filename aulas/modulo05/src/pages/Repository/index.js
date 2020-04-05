import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Loading, Owner, IssueList, IssueFilter, IssueNavigator } from './styles';
import Container from '../../components/Container';

export default class Repository extends Component{

    state = {
        repository: {},
        issues: [],
        filters: [
            {name: 'all', code: 1},
            {name: 'open', code: 2},
            {name: 'closed', code: 3}
        ],
        loading: true,
        activeFilter: {
            name: null,
            code: null,
        },
        perPage: 5,
        page: 1
    };

    async componentDidMount() {
        const { match } = this.props;

        const repoName = decodeURIComponent(match.params.repository);

        const [repository, issues] = await Promise.all([
            await api.get(`/repos/${repoName}`),
            await api.get(`/repos/${repoName}/issues`, {
                params: {
                    state: 'open',
                    per_page: this.state.perPage
                },
            }),
        ]);

        this.setState({
            repository: repository.data,
            issues: issues.data,
            loading: false
        });

    }

    handleFilter = async filter => {
        const { match } = this.props;

        this.setState({activeFilter: filter});

        const repoName = decodeURIComponent(match.params.repository);
        const filteredIssues = await api.get(`/repos/${repoName}/issues`, {
            params: {
                state: filter.name,
                per_page: this.state.perPage
            },
        });

        this.setState({issues: filteredIssues.data});
    }

    handleInputPerPage = e => {
        this.setState({perPage: e.target.value});
    }

    goBack = async e => {
        const { match } = this.props;

        this.setState({page: this.state.page - 1});

        const repoName = decodeURIComponent(match.params.repository);
        const filteredIssues = await api.get(`/repos/${repoName}/issues`, {
            params: {
                state: this.state.activeFilter.name,
                per_page: this.state.perPage,
                page: this.state.page
            },
        });

        this.setState({issues: filteredIssues.data});
    }

    goNext = async e => {
        const { match } = this.props;

        this.setState({page: this.state.page + 1});

        const repoName = decodeURIComponent(match.params.repository);
        const filteredIssues = await api.get(`/repos/${repoName}/issues`, {
            params: {
                state: this.state.activeFilter.name,
                per_page: this.state.perPage,
                page: this.state.page
            },
        });

        this.setState({issues: filteredIssues.data});
    }

    render() {
        const { repository, issues, loading, filters, activeFilter, perPage }  = this.state;

        if(loading) {
            return <Loading>Carregando</Loading>;
        }

        return (
            <Container>
                <Owner>
                    <Link to='/'>Voltar aos Repositórios</Link>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                    <h1>{ repository.name }</h1>
                    <p>{ repository.description }</p>
                </Owner>
                <IssueFilter>
                    <div>
                        {filters.map(filter => (
                            <div
                                key={filter.code}
                                active={activeFilter.code === filter.code ? 1 : 0}
                                onClick={() => this.handleFilter(filter)}>
                                {filter.name}
                            </div>
                        ))}
                    </div>
                </IssueFilter>
                <IssueList>
                    { issues.map(issue => (
                        <li key={String(issue.id)}>
                            <img src={issue.user.avatar_url} alt={issue.user.login}/>
                            <div>
                                <strong>
                                    <a href={issue.html_url}>{issue.title}</a>
                                    {issue.labels.map(label => (
                                        <span key={String(label.id)}>{label.name}</span>
                                    ))}
                                </strong>
                                <p>{issue.user.login}</p>
                            </div>
                        </li>
                    )) }
                </IssueList>
                <IssueNavigator>
                    <div onClick={this.goBack}>Anterior</div>
                    <div>
                        <span>Itens: </span>
                        <input
                            type="text"
                            onChange={this.handleInputPerPage}
                            value={perPage}
                        />
                    </div>
                    <div onClick={this.goNext}>Próximo</div>
                </IssueNavigator>
            </Container>
        );
    }
}
