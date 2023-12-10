package Serezha.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Serezha.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Блюда
 */
@Entity(name = "IISSerezhaБлюда")
@Table(schema = "public", name = "Блюда")
public class Blyuda {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодБлюда")
    private Integer кодблюда;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Стоимость")
    private Double стоимость;

    @OneToMany(mappedBy = "blyuda", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavBlyuda> sostavblyudas;


    public Blyuda() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодБлюда() {
      return кодблюда;
    }

    public void setКодБлюда(Integer кодблюда) {
      this.кодблюда = кодблюда;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Double getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Double стоимость) {
      this.стоимость = стоимость;
    }


}