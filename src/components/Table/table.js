import React,{useMemo,useEffect,useState} from 'react';
import {useTable, useGlobalFilter } from 'react-table';
import MOCK_DATA from './consults.json';
import { COLUMNS } from './columns';
import './table.css';
import ClipLoader from "react-spinners/ClipLoader";



export const FilteringTable = () => {

    const [loading, setLoading] = useState(true);
    const [tableValues, setTableValues] = useState(false);

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
   
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      setGlobalFilter,
    } = useTable({
      columns,
      data
    }, useGlobalFilter)

    useEffect(() => {
      const result = JSON.parse(localStorage.getItem('info'));
      rows.map(row => {
        if(row.values.fatura === result.cod_fatura){
            setGlobalFilter(result.cod_fatura);   
            setTableValues(true);
        }        
    })
     setLoading(false);
    },[]);
  

    
   
    return (
      <>        
      
      {
        loading 
        ?
        (
          <div className="loading-screen">
            <ClipLoader  size={150} color={'#fff'} loading={loading} />
          </div>
          
        )

        :

        (

        <>
          <div>
          <label className="label-search">RESULTADO DA BUSCA</label>

      </div>

      {
        tableValues
        ?
        (
          <div className="row">
        <div className="column1" >
        
        <table {...getTableProps()}>

          <tbody {...getTableBodyProps()}>
              {                 
                       
               rows.map(row => {
                
                prepareRow(row)
                return (
                  <>
                  
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>                
                      {headerGroup.headers.slice(0,4).map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>                  
                  ))}
                    
                    </tr>
                  ))}
                  <tr {...row.getRowProps()}>
                    {row.cells.slice(0,4).map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                    
                    
                  </tr>
                  
                  
                  </>
                )
              })}
            </tbody>
          
            
          
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
                  <>
                  
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>                
                      {headerGroup.headers.slice(4,6).map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>                  
                  ))}
                  <td className="td-top"></td>
                    <td className="td-top"></td>
                    
                    </tr>
                  ))}
                  <tr {...row.getRowProps()}>
                        
                    {row.cells.slice(4,6).map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                    <td className="td-bottom"></td>
                    <td className="td-bottom"></td>
                    
                    

                  </tr>
                  
                  
                
                  </>
                )
              })}
            </tbody>
          
        </table>

        </div>
        <div class="column">


        <table>
          <tr>
            <th><button className="td-button" >VISUALIZAR FATURA</button></th>
            <th><button className="td-button">BAIXAR <br></br> FATURA</button></th>
          </tr>
          <tr>            
            <th><button className="td-button">VISUALIZAR CONTRATO</button></th>
            <th><button className="td-button">BAIXAR CONTRATO</button></th>
          </tr>
        </table>

        </div>
      </div>

          
        )
        :
        (
            <div>
              <label className="label-search" style={{color:'#000', marginTop: '100px'}}>
                Não foi encontrada a fatura desejada.
              </label>
            </div>
        )



      }

      
      </>
          
        )



      }

        



      </>
    )
  }