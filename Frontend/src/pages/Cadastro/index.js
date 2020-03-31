import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

import logoImg from '../../assets/logo.png';

import './styles.css';

export default function Cadastro () {
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
        const classes = useStyles();
        const [age, setAge] = React.useState('');
      
        const handleChange = (event) => {
          setAge(event.target.value);
        };

    return (
        <div className="cadastro-container">
            <header>    
            <span> Faça seu Cadastro </span>
            <img className="logoImg" src={logoImg} alt="Grupo Humanizar" />
            </header>
           

            <div className="cadastro-caixa">
            <section className="form">
            <form /*onSubmit={handleLogin}*/>
                <h2> Dados Pessoais </h2>
                <input 
                    type="text"
                    placeholder="Seu nome"
                    //onChange = {e => setEmail(e.target.value)}
                />
                <MaskedInput
                    type="text"  
                    placeholder="CPF.: 000.000.000-00"
                    mask={[/[0-9]/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'-', /\d/,/\d/]}
                    
                />
                <MaskedInput 
                    type='text'
                    placeholder='RG.: 0.000.000'
                    mask={[/[1-9]/, '.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/]}
                />
                <form className="input-group">
                <input 
                    type="date" 
                    name="" 
                    id="data-nasc" 
                />

<FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Genero</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Masculino</MenuItem>
          <MenuItem value={20}>Feminino</MenuItem>
          <MenuItem value={30}>Outro</MenuItem>
        </Select>
        <FormHelperText>Selecione seu Genero!</FormHelperText>
      </FormControl>
            </form>
            </form>
            </section>

            <section className="form">
            <form>
                <h2> Endereço </h2>
                <MaskedInput 
                    type="text" 
                    id="Cep"
                    placeholder="CEP.: 00000-000"
                    mask={[/[1-9]/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/]}
                    
                />
                <input 
                    type="text" 
                    placeholder="Seu Logradouro"
                    id="Logradouro"
                    required
                />
                <input 
                    type="text"
                    placeholder="Cidade"
                    id="Cidade"
                    required
                />
                <form className="input-group">
                <input 
                    type="text"
                    placeholder="Complemento"
                    id="Complemento"
                    required
                />
                <input
                    type="text"
                    placeholder="N°"
                    id="Numero"
                    maxLength="4"
                    required
                />
                
                </form>
                <form className="input-group">
                <input 
                    type="text"
                    placeholder="Bairro"
                    id="Bairro"
                    required
                />
                <input 
                    type="text"
                    placeholder="UF" 
                    id="Uf"
                />
                </form>
            </form>
            </section>

            <section className="form">
                <form>
                    <h2> Contato </h2>
                    <input 
                        type="email" 
                        placeholder="Seu email"
                    />
                    <MaskedInput 
                        type="text"  
                        placeholder="Tel Celular.: (00)00000-0000"
                        mask={['(', /[0-9]/, /\d/,')',  /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/,/\d/]}

                    />
                    <MaskedInput 
                        type="text"  
                        placeholder="Tel Residencial.: (00)0000-0000"
                        mask={['(', /[0-9]/, /\d/,')',  /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/,/\d/]}
                    />
                </form>
            </section>
            <button type="submit" className="button" >
                    Cadastrar
                </button>
                
                <Link className="back-link" to="/">
                   <FiArrowLeft size={18} color="#facd6c" /> 
                      Voltar para o Login!   
                </Link>
            </div>
    </div>
    );
}
