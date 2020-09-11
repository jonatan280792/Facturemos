using Entity.Dtos;
using Repository.Helpers;
using Repository.Interfaces;
using System;
using System.Data;
using System.Data.SqlClient;

namespace Repository.Repositories
{
    public class FacturacionRepository : IFacturacionRepository
    {
        DataTable tblResult;
        SqlConnection con;

        public DataTable getClientes()
        {            
            using (con = new SqlConnection(DBContext.ObtenerCadenaDbConexSQL()))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.GET_CLIENTES, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@estado", SqlDbType.Int).Value = 1;
                        cmd.SelectCommand.Parameters.Add("@minEdad", SqlDbType.Int).Value = 35;                        
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }

        public DataTable getProductos()
        {
            using (con = new SqlConnection(DBContext.ObtenerCadenaDbConexSQL()))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.GET_PRODUCTOS, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@estado", SqlDbType.Int).Value = 1;                        
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }

        public DataTable getVentas()
        {
            using (con = new SqlConnection(DBContext.ObtenerCadenaDbConexSQL()))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.GET_VENTAS, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;                        
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }

        public DataTable setVentas(VentasDto dto)
        {
            using (con = new SqlConnection(DBContext.ObtenerCadenaDbConexSQL()))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.SET_VENTAS, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@id_cliente", SqlDbType.Int).Value = dto.id_cliente;
                        cmd.SelectCommand.Parameters.Add("@id_producto", SqlDbType.Int).Value = dto.id_producto;
                        cmd.SelectCommand.Parameters.Add("@valor", SqlDbType.Decimal).Value = dto.valor;
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }

        public DataTable updateVenta(VentasDto dto)
        {
            using (con = new SqlConnection(DBContext.ObtenerCadenaDbConexSQL()))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.UPDATE_VENTA, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@id", SqlDbType.Int).Value = dto.id;
                        cmd.SelectCommand.Parameters.Add("@id_cliente", SqlDbType.Int).Value = dto.id_cliente;
                        cmd.SelectCommand.Parameters.Add("@id_producto", SqlDbType.Int).Value = dto.id_producto;
                        cmd.SelectCommand.Parameters.Add("@valor", SqlDbType.Decimal).Value = dto.valor;
                        cmd.SelectCommand.Parameters.Add("@fecha_compra", SqlDbType.DateTime).Value = dto.fecha_compra;
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }

        public DataTable deleteVenta(int id)
        {
            using (con = new SqlConnection(DBContext.ObtenerCadenaDbConexSQL()))
            {
                try
                {
                    tblResult = new DataTable();
                    con.Open();
                    if (con.State == ConnectionState.Open)
                    {
                        SqlDataAdapter cmd = new SqlDataAdapter(STORE_PROCEDURES.DELETE_VENTA, con);
                        cmd.SelectCommand.CommandType = CommandType.StoredProcedure;
                        cmd.SelectCommand.Parameters.Add("@id", SqlDbType.Int).Value = id;
                        cmd.Fill(tblResult);

                        cmd.Dispose();
                    }
                }
                catch (SqlException ex)
                {
                    con.Close();
                    throw new InvalidOperationException("TAG: " + ex.Message + ex.ErrorCode + ex.Data, ex.InnerException);
                }
                catch (Exception)
                {
                    throw new Exception();
                }
                con.Close();
                return tblResult;
            }
        }
    }
}
