export class PokemonQuery {
    
    static findByName(name: string){      
        return `SELECT 
                    * 
                FROM 
                    pokemon.pokemon PKM
                WHERE
                    lower(PKM.name) LIKE '%${name}%'`
    }
  
    static manager(){
      return `select distinct (ad.ID_CELULA) from DW.GC.DIM_USUARIOS_AD ad
               where ad.gestor = (SELECT ad2.nome 
                                    from DW.GC.DIM_USUARIOS_AD ad2
                                   where ad2.email = @0)
                 and ad.ID_CELULA is not null
               order by ad.ID_CELULA`
    }
  
    static tempoCasa(){
      return `SELECT Data_Admissao 
                     , Hoje
                     , YEAR(Tempo) - 1 AS Anos
                     , MONTH(Tempo) - 1 AS Meses
                     , DAY(Tempo) - 1 AS Dias
                FROM (SELECT pn.Data_Admissao
                             , CAST(GetDate() AS DATE) AS Hoje
                             , DATEADD(DAY, -DAY(pn.Data_Admissao) + 1
                             , DATEADD(MONTH, -MONTH(pn.Data_Admissao) + 1
                             , DATEADD(YEAR, -YEAR(pn.Data_Admissao) + 1
                             , CAST(GetDate() AS DATE)))) AS Tempo 
                        FROM DW.GC.DIM_USUARIOS_AD ad
                        JOIN DW.[SCH_HR].[TBL_APDATA_DIM_PROFISSIONAIS] pa ON pa.id_profissional = ad.id_profissional
                        JOIN DW.[SCH_HR].[TBL_NATCORP_DIM_PROFISSIONAIS] pn ON pn.MATRICULA = pa.id_contratado
                       WHERE ad.username = @0) AS T`
    }
    
    static userdata(){
      return `select nome as name
                     ,ad.username
                     ,ce.descricao_pais
                     ,ad.ID_PROFISSIONAL
                     ,pn.ID_PROFISSIONAL_NATCORP
                from DW.GC.DIM_USUARIOS_AD ad
                inner join [SCH_SHARED].[TBL_STFCORP_DIM_CELULAS] ce on ce.id_celula = ad.id_celula
                left join [SCH_HR].[TBL_NATCORP_DIM_PROFISSIONAIS] pn on pn.cpf = ad.cpf
               where email = @0`
    }
  }
  